import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("brands")
      .withIndex("by_workspace", (q) => q.eq("workspaceId", args.workspaceId))
      .collect();
  },
});

export const get = query({
  args: { id: v.id("brands") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    workspaceId: v.id("workspaces"),
    name: v.string(),
    logo: v.optional(v.string()),
    voiceProfile: v.string(),
    guidelines: v.string(),
    bannedWords: v.array(v.string()),
    preferredTerms: v.array(v.string()),
    exampleCopy: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    return await ctx.db.insert("brands", {
      ...args,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("brands"),
    voiceProfile: v.optional(v.string()),
    guidelines: v.optional(v.string()),
    bannedWords: v.optional(v.array(v.string())),
    preferredTerms: v.optional(v.array(v.string())),
    exampleCopy: v.optional(v.array(v.string())),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const filtered = Object.fromEntries(Object.entries(updates).filter(([, v]) => v !== undefined));
    await ctx.db.patch(id, { ...filtered, updatedAt: Date.now() });
  },
});
