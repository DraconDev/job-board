// export const useFetchJobIfNone = ({ state }: { state: AppState }) => {
//     if (state.jobList.length === 0) {
//         fetch("/api/joblist")
//             .then((jobs) => jobs.json())
//             .then((data) => {
//                 state.setJobList([...data]);
//                 router.push("/");
//             })
//             .catch((error) => {
//                 console.error("Error fetching job list:", error);
//             });
//     }
// };

// export const useFetchJobIfNone = async () => {
//     try {
//         const response = await fetch("/api/joblist");
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching job list:", error);
//         throw error;
//     }
// };
