interface IConnectionParameters {
    type: 'sqlite';
    database: string; 
    synchronize?: boolean; 
    logging?: boolean; 
}

export default IConnectionParameters;
