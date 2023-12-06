export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            레이아웃 테스트
            {children}
        </div>
    )
}