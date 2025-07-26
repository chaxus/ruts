/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/bulls_and_cows.json`.
 */
export type BullsAndCows = {
  "address": "3wGUG3qnLtCZFg3ukqeQXNhVYjrr3Jai4RnzEDyqjphc",
  "metadata": {
    "name": "bullsAndCows",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "guessingAccount",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": []
    },
    {
      "name": "guess",
      "discriminator": [
        150,
        196,
        62,
        128,
        129,
        236,
        114,
        40
      ],
      "accounts": [
        {
          "name": "guessingAccount",
          "writable": true
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "guessingAccount",
      "discriminator": [
        50,
        96,
        52,
        86,
        229,
        191,
        73,
        144
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "numberTooSmall",
      "msg": "Too small"
    },
    {
      "code": 6001,
      "name": "numberTooLarge",
      "msg": "Too larget"
    }
  ],
  "types": [
    {
      "name": "guessingAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "number",
            "type": "u32"
          }
        ]
      }
    }
  ]
};
