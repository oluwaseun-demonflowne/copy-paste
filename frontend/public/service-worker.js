console.log("Service Worker Loaded");
self.addEventListener("message", async (event) => {
  const { action, text } = event.data;
  if (action === "copyToClipboard") {
  }
});
