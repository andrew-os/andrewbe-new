export default function YearToday(){
    const now = new Date()
    const currentYear: number = now.getFullYear();
        return(
            <>{currentYear}</>
        )
}