// import Image from "next/image";
// import { motion } from "framer-motion";

// const RegistrarPartners = () => {
//   const registrars = [
//     {
//       name: "GoDaddy",
//       logo: "/goDaddy.svg",
//       alt: "GoDaddy logo",
//     },
//     {
//       name: "Namecheap",
//       logo: "/nameCheap.svg",
//       alt: "Namecheap logo",
//     },
//   ];

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="pt-10"
//     >
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-center text-xl font-semibold text-white md:text-2xl"
//         >
//           We support these domain registrars
//         </motion.h2>
//         <div className="flex flex-wrap items-center justify-center gap-x-12">
//           {registrars.map((registrar, index) => (
//             <motion.div
//               key={registrar.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
//               className="relative h-24 w-32 brightness-0 invert transition-all duration-300 hover:brightness-100 hover:invert-0 md:w-48"
//             >
//               <Image
//                 src={registrar.logo}
//                 alt={registrar.alt}
//                 fill
//                 className="object-contain"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default RegistrarPartners;
