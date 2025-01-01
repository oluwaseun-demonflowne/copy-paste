export const handleCopy = async (textToCopy:string) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
  } catch (error) {
    console.log(error);
    throw new Error("Error copying");
  }
};
