export const handleCopy = async (textToCopy: string) => {
  // @ts-expect-error damn
  navigator.permissions.query({ name: "clipboard-write" }).then(async (result) => {
    console.log(result);
    if (result.state === "granted" || result.state === "prompt") {
      try {
        await navigator.clipboard.writeText(textToCopy);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.log(error);
        throw new Error("Error copying");
      }
    }
  });
};
