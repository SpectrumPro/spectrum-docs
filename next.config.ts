// next.config.mjs
import nextra from "nextra";

const withNextra = nextra({
  // Nextra options here (we’ll add more later)
  // e.g. search: { codeblocks: false }
});

export default withNextra({
  // Regular Next.js config here
  // Optional: fix for Turbopack + mdx-components path (see Step 4 note)
});
