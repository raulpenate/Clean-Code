(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getAllMovieActors( movieId: string ) {
        console.log({ movieId });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface createMovieOptions {
        title: string;
        description: string;
        rating: number;
        cast: string[]; 
    }
    
    function createMovie({ title, description, rating, cast } : createMovieOptions) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();




@raulpenate
Comment
