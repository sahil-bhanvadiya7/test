import { useRouter } from "next/router";



const Blogedit = () => {
    const router = useRouter();

    return (
        <>
            <button type="button" onClick={() => router.push('/blogeditform')}>
                Edit
            </button>
        </>
    )
}

export default Blogedit