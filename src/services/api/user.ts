export const getStatus = async () => {
    "use server";
    return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`).then((res) => 
        res.json())
        // .then((data) => {
        //   setUser(data);
        //   setLoading(false);
        // });
}