module.exports = {
  docs: {
    Overview: ["overview/about", "overview/install", "overview/media"],
    Features: [
      "features/settings",
      "features/custom-contract-types",
      "features/reuse-of-story-maps",
      "features/additional-lances",
      "features/random-spawns",
      "features/encounter-rulesets",
      "features/extended-lances",
      "features/extended-boundaries",
      "features/dynamic-withdraw",
      "features/ai-behaviours",
      "features/quick-skirmish",
      "features/dialogue-system",
      "features/combat-dialogue",
      "features/per-contract-overrides",
    ],
    Content: ["content/story", "content/procedural-contract-types"],
    "Contract Type Builder": [
      "contract-builder/overview",
      "contract-builder/setup",
      "contract-builder/structure",
    ],
    "Contract Type Builder API": [
      "contract-builder-api/chunks",
      "contract-builder-api/nodes",
      {
        type: "category",
        label: "Nodes API",
        items: [
          "contract-builder-api/nodes/contract-edit",
          "contract-builder-api/nodes/dialogue",
          "contract-builder-api/nodes/objective",
          "contract-builder-api/nodes/region",
          "contract-builder-api/nodes/spawner",
          "contract-builder-api/nodes/swap-placement",
          "contract-builder-api/nodes/combat-state",
        ],
      },
      "contract-builder-api/ai-orders",
      "contract-builder-api/overrides",
      "contract-builder-api/plots",
      "contract-builder-api/triggers",
      {
        type: "category",
        label: "Trigger Conditionals",
        items: [
          "contract-builder-api/trigger-conditionals/always-true-conditional",
          "contract-builder-api/trigger-conditionals/dialogue-matches-conditional",
          "contract-builder-api/trigger-conditionals/encounter-object-matches-state-conditional",
          "contract-builder-api/trigger-conditionals/objective-status-conditional",
          "contract-builder-api/trigger-conditionals/objective-statuses-conditional",
        ],
      },
      {
        type: "category",
        label: "Trigger Results",
        items: [
          "contract-builder-api/trigger-results/camera-focus-result",
          "contract-builder-api/trigger-results/complete-objective-result",

          "contract-builder-api/trigger-results/delay-result",
          "contract-builder-api/trigger-results/destroy-buildings-at-lance-spawns-result",
          "contract-builder-api/trigger-results/dialogue-result",

          "contract-builder-api/trigger-results/execute-game-logic-result",

          "contract-builder-api/trigger-results/ignore-chunks-result",

          "contract-builder-api/trigger-results/modify-lance-evasion-ticks-by-tag-result",

          "contract-builder-api/trigger-results/set-is-objective-target-by-tag-result",
          "contract-builder-api/trigger-results/set-lance-evasion-ticks-by-tag-result",
          "contract-builder-api/trigger-results/set-status-at-random-result",
          "contract-builder-api/trigger-results/set-status-result",
          "contract-builder-api/trigger-results/set-team-by-lance-spawner-guid-result",
          "contract-builder-api/trigger-results/set-team-by-tag-result",
          "contract-builder-api/trigger-results/set-temporary-unit-phase-initiative-by-tag-result",
          "contract-builder-api/trigger-results/set-units-in-region-to-be-tagged-objective-targets-result",

          "contract-builder-api/trigger-results/tag-units-in-region-result",
          "contract-builder-api/trigger-results/trigger-result-at-random-result",
        ],
      },
    ],
    "Suggestions & Feeback": ["support"],
  },
};
