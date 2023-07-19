import Image from "next/image";
import Link from "next/link";

export default function Logo({ children }: { children: string }) {
    return (
        <>
            <Link href={"home" ? "/" : `/${children}`}>
                <div className="flex items-center justify-center w-8 h-8 mx-1">
                    <Image
                        src={`${children}.svg`}
                        alt={children}
                        width={50}
                        height={50}
                        objectFit="contain"
                        className="invert"
                    />
                </div>
            </Link>
        </>
    );
}
