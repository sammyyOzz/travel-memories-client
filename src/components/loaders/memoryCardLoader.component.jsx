import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

export function MemoryCardLoader() {
    return (
        <SkeletonTheme baseColor="#d4d1d1" highlightColor="#b3b6b6">
            <p>
                <Skeleton height={200} style={{ marginBottom: '20px', borderRadius: '10px' }} />
                <Skeleton count={3} height={20} style={{ marginBottom: '5px', borderRadius: '10px' }} />
            </p>
        </SkeletonTheme>
    )
}