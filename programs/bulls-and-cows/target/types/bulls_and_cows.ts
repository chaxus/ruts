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
    "version": "0.0.0",
    "spec": "0.1.0"
  },
  "instructions": [
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  117,
                  101,
                  115,
                  115,
                  105,
                  110,
                  103,
                  32,
                  112,
                  100,
                  97
                ]
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "number",
          "type": "u32"
        }
      ]
    },
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
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  117,
                  101,
                  115,
                  115,
                  105,
                  110,
                  103,
                  32,
                  112,
                  100,
                  97
                ]
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
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
