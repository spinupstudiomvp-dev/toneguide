import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: { brandId: v.id("brands") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("checks")
      .withIndex("by_brand", (q) => q.eq("brandId", args.brandId))
      .order("desc")
      .take(50);
  },
});

export const create = mutation({
  args: {
    brandId: v.id("brands"),
    memberId: v.optional(v.id("members")),
    contentType: v.string(),
    inputText: v.string(),
    inputImageUrl: v.optional(v.string()),
    score: v.number(),
    feedback: v.string(),
    annotations: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("checks", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
