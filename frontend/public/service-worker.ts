self.addEventListener("message", async (event) => {
    const { action, text } = event.data;
  
    if (action === "copyToClipboard") {
      try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied to clipboard:", text);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  });
  