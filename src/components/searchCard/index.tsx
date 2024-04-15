import { CourseType } from "@/src/services/courseService";
import styles from "./styles.module.scss";
import Link from "next/link";

interface props {
  course: CourseType;
}

const SearchCard = ({ course }: props) => {
  return (
    <>
      <Link href={`/course/${course.id}`}></Link>
      <div className={styles.searchCard}>
        <img
          src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
          alt={course.name}
          className={styles.searchCardImg}
        />
        <p className={styles.searchCardTitle}>{course.name}</p>
        <p className={styles.searchCardDescription}>{course.synopsis}</p>
      </div>
    </>
  );
};

export default SearchCard;
