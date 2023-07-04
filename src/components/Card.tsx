import "./Card.css"

interface Props {
    title: string,
    description: string,
    children: React.ReactElement,
}

const Card: React.FC<Props> = ({title, description, children}) => {
    return <div className="card">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="content">
            {children}
        </div>
    </div>
}

export default Card;


