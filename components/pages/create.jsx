import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdOutlineCreate as CreateIcon } from "react-icons/md";
import Layout from "../Layout";
import TextInput from "../TextInput";
import { useForm } from "react-hook-form";
import TextAreaInput from "../TextAreaInput";
import TextButton from "../TextButton";

const create = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <Layout>
      <div className="pt-20">
        <Box
          as="main"
          padding={{ base: "4", md: "8" }}
          maxWidth="5xl"
          marginX="auto"
        >
          <Box
            maxWidth="xl"
            marginX="auto"
            borderRadius="lg"
            paddingX="6"
            paddingY="8"
            backgroundColor={"formBackgroundColor"}
          >
            <form onSubmit={"formik.handleSubmit"}>
              <Heading fontSize="4xl">Create new NFT collection</Heading>

              <TextInput
                label={"Name"}
                fieldName="name"
                placeHolder="My awesome NFT"
                register={register}
              />

              <TextInput
                label={"Symbol"}
                fieldName="name"
                placeHolder="My awesome NFT"
                register={register}
              />

              <TextInput
                label={"email"}
                fieldName="email"
                placeHolder="Enter Valid Email"
                register={register}
              />

              <TextAreaInput
                label={"Description"}
                rows="5"
                fieldName="email"
                placeHolder="This NFT collection is about..."
                register={register}
              />

              <Button
                //colorScheme="brand"
                marginLeft="auto"
                marginTop="8"
                type="submit"
                // isLoading={'progressCreateNftCollection'}
                // disabled={'progressCreateNftCollection'}
                // loadingText="Creating"
                rightIcon={<CreateIcon size="18" />}
                display="flex"
                alignItems="center"
              >
                Create
              </Button>

              <Text
                textAlign="end"
                marginTop="4"
                fontStyle="italic"
                fontSize="sm"
                fontWeight="600"
                opacity={0.7}
              >
                You will be able to mint new NFTs after you create the
                collection.
              </Text>

              <TextButton>Button</TextButton>
            </form>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default create;
