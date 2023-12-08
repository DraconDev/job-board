// loading page for next js 14

export default function LoadingPage() {
    // const router = useRouter();

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         router.push("/");
    //     }, 3000);

    //     return () => clearTimeout(timeout);
    // }, []);

    return (
        <div className="flex items-center justify-center h-screen">
            <h1>Loading...</h1>
        </div>
    );
}
