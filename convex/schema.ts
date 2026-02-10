import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  workspaces: defineTable({
    name: v.string(),
    slug: v.string(),
    createdAt: v.number(),
    plan: v.string(),
  }).index("by_slug", ["slug"]),

  brands: defineTable({
    workspaceId: v.id("workspaces"),
    name: v.string(),
    logo: v.optional(v.string()),
    voiceProfile: v.string(), // JSON string
    guidelines: v.string(),
    bannedWords: v.array(v.string()),
    preferredTerms: v.array(v.string()),
    exampleCopy: v.array(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_workspace", ["workspaceId"]),

  brandDocuments: defineTable({
    brandId: v.id("brands"),
    title: v.string(),
    type: v.string(),
    content: v.string(),
    fileUrl: v.optional(v.string()),
    uploadedAt: v.number(),
  }).index("by_brand", ["brandId"]),

  members: defineTable({
    workspaceId: v.id("workspaces"),
    email: v.string(),
    name: v.string(),
    role: v.string(),
    brandAccess: v.array(v.string()),
    createdAt: v.number(),
  }).index("by_workspace", ["workspaceId"])
    .index("by_email", ["email"]),

  checks: defineTable({
    brandId: v.id("brands"),
    memberId: v.optional(v.id("members")),
    contentType: v.string(),
    inputText: v.string(),
    inputImageUrl: v.optional(v.string()),
    score: v.number(),
    feedback: v.string(), // JSON string
    annotations: v.string(), // JSON string
    createdAt: v.number(),
  }).index("by_brand", ["brandId"]),

  chatSessions: defineTable({
    brandId: v.id("brands"),
    memberId: v.optional(v.id("members")),
    createdAt: v.number(),
  }).index("by_brand", ["brandId"]),

  chatMessages: defineTable({
    sessionId: v.id("chatSessions"),
    role: v.string(),
    content: v.string(),
    createdAt: v.number(),
  }).index("by_session", ["sessionId"]),

  toneAudits: defineTable({
    url: v.string(),
    brandName: v.string(),
    channels: v.string(),
    voiceProfile: v.string(),
    analysis: v.string(),
    score: v.number(),
    email: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_url", ["url"]).index("by_createdAt", ["createdAt"]),

  waitlist: defineTable({
    email: v.string(),
    source: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
});
