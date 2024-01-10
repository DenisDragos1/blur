import Moralis from 'moralis';

try {
  await Moralis.start({
    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjM5NDMzZjg3LTFiZDctNGNlYS04ZGVmLTFkZDc2ODlkOTIyNiIsIm9yZ0lkIjoiMzY2NjY2IiwidXNlcklkIjoiMzc2ODMyIiwidHlwZUlkIjoiZjJmZGNhYTEtMjU0Mi00MTM1LWExNDktNzk4OWRlZDk1YTNlIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE1MDYyMTAsImV4cCI6NDg1NzI2NjIxMH0.gPwQNUG96ODIZugFWMrBgZOVenWYO1RsExjAjO3gkyE"
  });

  const response = await Moralis.EvmApi.nft.getContractNFTs({
    "chain": "0x1",
    "format": "decimal",
    "mediaItems": false,
    "address": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
  });

  console.log(response.raw);
} catch (e) {
  console.error(e);
}