import { useRouter } from "next/router";
// import Link from 'next/link'



const CaseStudyEdit = () => {
    const router = useRouter()

    return (
        <>



            <button className="editbutton " type="button" onClick={() => router.push('/casestudyeditform')}>
                Edit
            </button>
        </>
    )
}

export default CaseStudyEdit