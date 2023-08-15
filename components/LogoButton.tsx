import Image from "next/image";
import Link from "next/link";

export default function Logo({ type }: { type: string }) {
    return (
        <>
            <Link href={"home" ? "/" : `/${type}`}>
                <div className="flex items-center justify-center w-8 h-8 mx-1">
                    <Image
                        src={`${type}.svg`}
                        alt={type}
                        width={50}
                        height={50}
                        title={type}
                        objectFit="contain"
                        className="invert"
                    />
                </div>
            </Link>
        </>
    );
}
