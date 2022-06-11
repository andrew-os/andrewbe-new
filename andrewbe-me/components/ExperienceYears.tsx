export default function ExperienceYears(){
    const now = new Date()
    const currentYear: number = now.getFullYear();
        return(
            <>{currentYear - 2013} years</>
        )
}