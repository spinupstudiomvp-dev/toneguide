import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    url: v.string(),
    brandName: v.string(),
    channels: v.string(),
    voiceProfile: v.string(),
    analysis: v.string(),
    score: v.number(),
    email: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("toneAudits", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const get = query({
  args: { id: v.id("toneAudits") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

export const getByUrl = query({
  args: { url: v.string() },
  handler: async (ctx, { url }) => {
    return await ctx.db
      .query("toneAudits")
      .withIndex("by_url", (q) => q.eq("url", url))
      .order("desc")
      .first();
  },
});

export const list = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, { limit }) => {
    return await ctx.db
      .query("toneAudits")
      .withIndex("by_createdAt")
      .order("desc")
      .take(limit ?? 20);
  },
});
