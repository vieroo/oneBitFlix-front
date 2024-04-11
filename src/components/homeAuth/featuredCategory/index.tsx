import useSWR from "swr"
import styles from "../../../../styles/slideCategory.module.scss"
import courseService from "@/src/services/courseService"
import SlideComponent from "../../common/slideComponent"

const FeaturedCategory = () => {
  const { data, error } = useSWR("/newest", courseService.getFeaturedCourses)

  if (error) return error
  if (!data)
      return (
        <>
          <p>Loading...</p>
        </>
      )

  return (
    <>
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent course={data.data} />
    </>
  )
}

export default FeaturedCategory