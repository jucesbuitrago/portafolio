import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        ¡Hola y bienvenido a mi portafolio! Soy Julio Buitrago, un apasionado estudiante de ingeniería de sistemas en la Universidad del Tolima. A mis 20 años, me encuentro en el tercer semestre de mi carrera, y estoy emocionado por compartir mi experiencia y habilidades en el campo de la tecnología.
        </p>

        <br />

        <p className="text-xl">
        A lo largo de mi trayecto académico, he buscado constantemente oportunidades para enriquecer mis conocimientos. Me enorgullece decir que he completado exitosamente cinco diplomados en áreas relevantes para la ingeniería de sistemas, así como un tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI). Estas experiencias me han brindado una base sólida en diversos aspectos de la informática y me han permitido abordar desafíos técnicos con confianza y creatividad.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
