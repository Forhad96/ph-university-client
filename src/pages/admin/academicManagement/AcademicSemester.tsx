import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagement.api";


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined)
    console.log(data);
    return (
        <div>
            <p>HELLO I AM AcademicSemester</p>
        </div>
    );
};
export default AcademicSemester;