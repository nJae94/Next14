
interface Props {
    params: { username: string, id: string, photoId: string }

}
export default function Page({ params }: Props) {
    return (
        <div>{params.id}</div>
    )
}