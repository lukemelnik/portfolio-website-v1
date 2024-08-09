"use client";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <section ref={ref} id="about" className="scroll-mt-20 md:scroll-mt-44">
      <h1 className="text-2xl font-bold text-center mb-3">About</h1>
      <p className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        magnam minima distinctio quos cum atque modi ratione quidem maxime.
        Inventore blanditiis beatae fuga quo deleniti atque quae quia quis
        repellat sapiente! Sit ipsum in necessitatibus animi quas harum
        molestiae, dolore ipsam sint unde ducimus, accusamus nemo commodi?
        Veniam adipisci aspernatur ad doloribus, cupiditate saepe deleniti
        corporis cum laboriosam ducimus fugiat perferendis doloremque. Fugiat
        recusandae dicta blanditiis cum quas itaque at quasi? Autem asperiores
        ab harum laborum labore? Deleniti blanditiis obcaecati adipisci
        necessitatibus neque ipsa, quam tenetur, similique corporis voluptas
        perspiciatis atque voluptatibus. Sint, soluta repellendus autem ipsa
        voluptates voluptas perferendis.
      </p>
    </section>
  );
}
