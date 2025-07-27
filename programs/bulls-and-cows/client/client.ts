import * as web3 from '@solana/web3.js';
import * as anchor from '@coral-xyz/anchor';
import type { BullsAndCows } from '../target/types/bulls_and_cows';

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.BullsAndCows as anchor.Program<BullsAndCows>;

const seeds = Buffer.from('guessing pda');
const guessingPdaPubkey = anchor.web3.PublicKey.findProgramAddressSync([seeds], program.programId);

async function initialize() {
  try {
    const initializeTx = await program.methods
      .initialize()
      .accounts({
        guessingAccount: guessingPdaPubkey[0],
        payer: program.provider.publicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();

    console.log('Initialize successfully!\n Your transaction signature is:', initializeTx);
  } catch (errors: any) {
    console.log(errors);
  }
}

async function guessing(number: number) {
  try {
    const guessingTx = await program.methods
      .guess(number)
      .accounts({
        guessingAccount: guessingPdaPubkey[0],
        payer: program.provider.publicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();
    console.log("Congratulation you're right!");
  } catch (errors: any) {
    console.log(errors.error.errorMessage);
  }
}

initialize();
// guessing(0);
