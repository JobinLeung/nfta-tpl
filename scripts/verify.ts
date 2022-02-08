// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat";

async function main() {
  await hre.run("verify:verify", {
    address: "0x711BEBE1d2b73BFf7745F4498cF923B16650794E",
    constructorArguments: [
      "https://w.g.cc/",
      "0x36d8d59611e74EA778EfE4B3a3203Cb88070B355",
      10,
      9999,
      10,
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
