(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getAllMovieActors(movieId: string) {
    console.log({ movieId });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface createMovieOptions {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({
    title,
    description,
    rating,
    cast,
  }: createMovieOptions) {
    console.log({ title, description, rating, cast });
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }
})();

interface payAmountOptions {
  isDead: boolean;
  isSeparated: boolean;
  isRetired: boolean;
}

const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}: payAmountOptions): number => {
  return isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;
};
