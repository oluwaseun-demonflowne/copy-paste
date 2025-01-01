console.log("Service Worker Loaded");
self.addEventListener("message", async (event) => {
  const { action, text } = event.data;
  console.log(action, text);
  if (action === "copyToClipboard") {
    console.log(action, text);
  }
});
