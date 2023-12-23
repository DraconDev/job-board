import Image from "next/image";
import Link from "next/link";

export default function Logo({ type }: { type: string }) {
    return (
        <>
            <Link href={type === "home" ? "/" : `/${type}`}>
                {/* <Link href="work"> */}
                <div className="h-full px-1 hover:bg-accent rounded-lg">
                    <div className="flex items-center justify-center ">
                        <Image
                            src={`${type}.svg`}
                            alt={type}
                            width={36}
                            height={36}
                            title={type}
                            className="invert "
                        />
                    </div>
                </div>
            </Link>
        </>
    );
}
