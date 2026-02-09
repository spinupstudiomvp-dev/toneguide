import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { sessionId: v.id("chatSessions") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chatMessages")
      .withIndex("by_session", (q) => q.eq("sessionId", args.sessionId))
      .collect();
  },
});

export const send = mutation({
  args: {
    sessionId: v.id("chatSessions"),
    role: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("chatMessages", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const createSession = mutation({
  args: {
    brandId: v.id("brands"),
    memberId: v.optional(v.id("members")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("chatSessions", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
