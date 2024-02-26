import React from 'react'
import { useParams } from 'react-router-dom'

function ProdDetail() {
    const products = {
        "Sunflower-Oil": 100,
        "Apple": 50,
        "Orange-Juice": 80,
        "Chicken-Breast": 120,
        "Banana": 40,
        "Rice": 60,
        "Milk": 30,
        "Tomato": 20,
        "Coffee": 90,
        "Chocolate": 70
      };
    let {id} = useParams()
  return (<>
    <h1>
        {id}
    </h1>
    <h1>
        {products[id]} rupees
    </h1>
    <p>
    Sunflower oil is a widely used vegetable oil extracted from sunflower seeds. It is known for its light flavor, high smoke point, and various culinary and health benefits. Here are some details about sunflower oil:

1. **Nutritional Profile**: Sunflower oil is rich in vitamin E, an antioxidant that helps protect cells from damage caused by free radicals. It also contains unsaturated fats, including monounsaturated and polyunsaturated fats, which are considered heart-healthy.

2. **Types of Sunflower Oil**:
   - **Refined Sunflower Oil**: This type of sunflower oil is processed to remove impurities and odors, resulting in a neutral flavor and high smoke point. It is suitable for frying, baking, and other high-temperature cooking methods.
   - **Unrefined Sunflower Oil**: Also known as cold-pressed or virgin sunflower oil, this type is minimally processed, retaining more of the natural flavor and nutrients of the sunflower seeds. It has a lower smoke point and is best used in salad dressings and low-temperature cooking.

3. **Culinary Uses**: Sunflower oil is a versatile cooking oil used in various culinary applications:
   - It is commonly used for frying, sautéing, and deep-frying due to its high smoke point.
   - It is used as a salad dressing base, especially the unrefined variety, which adds a nutty flavor to dishes.
   - It is used in baking recipes for cakes, muffins, and cookies, providing moisture and tenderness to baked goods.

4. **Health Benefits**:
   - Sunflower oil is low in saturated fats and high in unsaturated fats, which can help lower LDL cholesterol levels and reduce the risk of heart disease.
   - It is a good source of vitamin E, which has antioxidant properties that may help protect cells from oxidative damage.
   - Some studies suggest that sunflower oil may have anti-inflammatory effects and contribute to overall heart health when used as part of a balanced diet.

5. **Storage and Shelf Life**: Sunflower oil should be stored in a cool, dark place away from heat and light to prevent oxidation. Properly stored, it has a shelf life of up to one year.

Overall, sunflower oil is a popular cooking oil known for its light flavor, versatility, and potential health benefits. It is widely used in kitchens around the world for both culinary and nutritional purposes.
    </p>
    </>
  )
}

export default ProdDetail