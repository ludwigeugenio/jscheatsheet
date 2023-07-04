import "./Card.css"

interface Props {
    title: string,
    description: string,
    Content: React.FC,
}

const Card: React.FC<Props> = ({title, description, Content}) => {
    return <div className="card">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="content">
            <Content />
        </div>
    </div>
}

export default Card;


