import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

export function CommentLoader() {
    return (
        <SkeletonTheme baseColor="#d4d1d1" highlightColor="#b3b6b6">
            { Array(2).fill().map((_, i) => (
                <p>
                    <Skeleton height={20} style={{ marginBottom: '20px', borderRadius: '10px', width: '50%' }} />
                </p>
            ))}
            { Array(2).fill().map((_, i) => (
                <p>
                    <Skeleton height={20} style={{ marginBottom: '20px', borderRadius: '10px', width: '100%' }} />
                </p>
            ))}
        </SkeletonTheme>
    )
}