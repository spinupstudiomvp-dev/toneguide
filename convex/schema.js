"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("convex/server");
var values_1 = require("convex/values");
exports.default = (0, server_1.defineSchema)({
    workspaces: (0, server_1.defineTable)({
        name: values_1.v.string(),
        slug: values_1.v.string(),
        createdAt: values_1.v.number(),
        plan: values_1.v.string(),
    }).index("by_slug", ["slug"]),
    brands: (0, server_1.defineTable)({
        workspaceId: values_1.v.id("workspaces"),
        name: values_1.v.string(),
        logo: values_1.v.optional(values_1.v.string()),
        voiceProfile: values_1.v.string(), // JSON string
        guidelines: values_1.v.string(),
        bannedWords: values_1.v.array(values_1.v.string()),
        preferredTerms: values_1.v.array(values_1.v.string()),
        exampleCopy: values_1.v.array(values_1.v.string()),
        createdAt: values_1.v.number(),
        updatedAt: values_1.v.number(),
    }).index("by_workspace", ["workspaceId"]),
    brandDocuments: (0, server_1.defineTable)({
        brandId: values_1.v.id("brands"),
        title: values_1.v.string(),
        type: values_1.v.string(),
        content: values_1.v.string(),
        fileUrl: values_1.v.optional(values_1.v.string()),
        uploadedAt: values_1.v.number(),
    }).index("by_brand", ["brandId"]),
    members: (0, server_1.defineTable)({
        workspaceId: values_1.v.id("workspaces"),
        email: values_1.v.string(),
        name: values_1.v.string(),
        role: values_1.v.string(),
        brandAccess: values_1.v.array(values_1.v.string()),
        createdAt: values_1.v.number(),
    }).index("by_workspace", ["workspaceId"])
        .index("by_email", ["email"]),
    checks: (0, server_1.defineTable)({
        brandId: values_1.v.id("brands"),
        memberId: values_1.v.optional(values_1.v.id("members")),
        contentType: values_1.v.string(),
        inputText: values_1.v.string(),
        inputImageUrl: values_1.v.optional(values_1.v.string()),
        score: values_1.v.number(),
        feedback: values_1.v.string(), // JSON string
        annotations: values_1.v.string(), // JSON string
        createdAt: values_1.v.number(),
    }).index("by_brand", ["brandId"]),
    chatSessions: (0, server_1.defineTable)({
        brandId: values_1.v.id("brands"),
        memberId: values_1.v.optional(values_1.v.id("members")),
        createdAt: values_1.v.number(),
    }).index("by_brand", ["brandId"]),
    chatMessages: (0, server_1.defineTable)({
        sessionId: values_1.v.id("chatSessions"),
        role: values_1.v.string(),
        content: values_1.v.string(),
        createdAt: values_1.v.number(),
    }).index("by_session", ["sessionId"]),
    toneAudits: (0, server_1.defineTable)({
        url: values_1.v.string(),
        brandName: values_1.v.string(),
        channels: values_1.v.string(),
        voiceProfile: values_1.v.string(),
        analysis: values_1.v.string(),
        score: values_1.v.number(),
        email: values_1.v.optional(values_1.v.string()),
        createdAt: values_1.v.number(),
    }).index("by_url", ["url"]).index("by_createdAt", ["createdAt"]),
    waitlist: (0, server_1.defineTable)({
        email: values_1.v.string(),
        createdAt: values_1.v.number(),
    }).index("by_email", ["email"]),
});
