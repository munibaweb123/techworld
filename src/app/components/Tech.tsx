interface techprops{
    name: string;
    subscribers: number;
    description: string;
    
  
  }
  const Tech = ({name, subscribers, description}:techprops) => {
    return (
      <div className="flex-col justify-start items-start bg-cyan-300 border-2 border-cyan-500 p-4 m-4">
        <h1>Name of youtube channel: {name}</h1>
        <p>subscribers: {subscribers}</p>
        <p>description: {description}</p>
      </div>
    )
  }
  export default Tech