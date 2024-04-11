import categoriesService from "@/src/services/categoriesService"
import styles from "../../../../styles/slideCategory.module.scss"
import useSWR from "swr"
import SlideComponent from "../../common/slideComponent"

interface props {
  categoryId: number
  categoryName: string
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  const { data, error } = useSWR(
    `/categoriesCourses${categoryId}`,
    () => categoriesService.getCourses(categoryId)
  )

  if (error) return error
  if (!data)
      return (
        <>
          <p>Loading...</p>
        </>
      )

  return (
    <>
      <SlideComponent course={data.data.courses} />
      <p className={styles.titleCategory}>{categoryName}</p>
    </>
  )
}

export default ListCategoriesSlide