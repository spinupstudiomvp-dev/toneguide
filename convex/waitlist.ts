import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const join = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    if (existing) return existing._id;
    return await ctx.db.insert("waitlist", {
      email: args.email,
      createdAt: Date.now(),
    });
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("waitlist").order("desc").take(100);
  },
});
