export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData)
    return data
}
