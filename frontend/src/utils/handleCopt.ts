export const handleCopy = async (textToCopy:string) => {
    try {
        await navigator.clipboard.writeText(textToCopy)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_error) {
        throw new Error("Error copying")
    }
}