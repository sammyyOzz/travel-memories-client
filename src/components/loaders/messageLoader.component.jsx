import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

export function MessageLoader() {
    return (
        <SkeletonTheme baseColor="#d4d1d1" highlightColor="#b3b6b6">
            { Array(2).fill().map((_, i) => (
                <p key={i}>
                    <Skeleton height={30} style={{ marginBottom: '20px', borderRadius: '10px', width: '40%' }} />
                </p>
            ))}
            { Array(2).fill().map((_, i) => (
                <p key={i}>
                    <Skeleton height={40} style={{ marginBottom: '20px', borderRadius: '10px', width: '60%' }} />
                </p>
            ))}
            <p>
                <Skeleton height={30} style={{ marginBottom: '20px', borderRadius: '10px', width: '50%' }} />
            </p>
        </SkeletonTheme>
    )
}