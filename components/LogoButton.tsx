import Image from "next/image";
import Link from "next/link";

export default function Logo({ type }: { type: string }) {
    return (
        <>
            <Link href={type === "home" ? "/" : `/${type}`}>
                {/* <Link href="work"> */}
                <div className="flex items-center justify-center w-8 h-8 ">
                    <Image
                        src={`${type}.svg`}
                        alt={type}
                        width={30}
                        height={30}
                        title={type}
                        className="invert"
                    />
                </div>
            </Link>
        </>
    );
}
