// async function getAvailableJobs(searchQuery: string) {
//     const url = INDEED_LINK;
//     console.log(url);

//     const headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     headers.append(
//         "Authorization",
//         "Bearer " +
//             "16516afc1911bcf663134c67740e0debec14708b991f33222b2588ae658d71ad"
//     );

//     const options: RequestInit = {
//         method: "GET",
//         headers: headers,
//     };

//     const response = await fetch(url, options);
//     const jobs = await response.json();
//     console.log(jobs);
// }
