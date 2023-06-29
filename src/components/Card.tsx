import "./Card.css"

interface Props {
    title: string,
    description: string,
    Content: React.FC,
}

const Card: React.FC<Props> = ({title, description, Content}) => {
    return <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="content">
            <Content />
        </div>
    </div>
}

export default Card;


